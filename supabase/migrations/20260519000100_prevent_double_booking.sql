CREATE UNIQUE INDEX IF NOT EXISTS idx_appointments_unique_active_slot
ON public.appointments (barber_id, appointment_date, appointment_time)
WHERE status <> 'cancelled';

CREATE OR REPLACE FUNCTION public.get_barber_taken_slots(
  _barber_id uuid,
  _appointment_date date
)
RETURNS TABLE (appointment_time time)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT a.appointment_time
  FROM public.appointments a
  WHERE a.barber_id = _barber_id
    AND a.appointment_date = _appointment_date
    AND a.status <> 'cancelled';
$$;

GRANT EXECUTE ON FUNCTION public.get_barber_taken_slots(uuid, date) TO anon, authenticated;
