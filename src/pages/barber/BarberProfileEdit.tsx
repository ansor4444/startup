import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader, Card } from "@/components/shared/Page";
import { toast } from "sonner";
import { Upload, MapPin, Instagram, Youtube, Send } from "lucide-react";

export default function BarberProfileEdit() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [barberId, setBarberId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState<"photo" | "cover" | null>(null);
  const [form, setForm] = useState<any>({
    full_name: "", username: "", telegram_username: "", phone: "",
    bio: "", specialty: "", experience_years: 0,
    photo_url: "", cover_url: "",
    instagram: "", tiktok: "", youtube: "",
    salon_name: "", salon_address: "", map_link: "",
    home_service: false, busy_status: false,
  });

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data: b } = await supabase.from("barbers").select("*").eq("user_id", user.id).maybeSingle();
      const { data: p } = await supabase.from("profiles").select("phone").eq("user_id", user.id).maybeSingle();
      if (b) setBarberId(b.id);
      setForm((f: any) => ({ ...f, ...(b || {}), phone: p?.phone || "" }));
    })();
  }, [user]);

  const upload = async (file: File, kind: "photo" | "cover") => {
    if (!user) return;
    setUploading(kind);
    const ext = file.name.split(".").pop();
    const path = `${user.id}/${kind}-${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from("portfolio").upload(path, file, { upsert: true });
    if (upErr) { setUploading(null); return toast.error(upErr.message); }
    const { data: pub } = supabase.storage.from("portfolio").getPublicUrl(path);
    setForm({ ...form, [kind === "photo" ? "photo_url" : "cover_url"]: pub.publicUrl });
    setUploading(null);
    toast.success(t("dash.barber.uploaded"));
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    const { phone, ...barberData } = form;
    if (barberId) {
      await supabase.from("barbers").update(barberData).eq("id", barberId);
    } else {
      const { data } = await supabase.from("barbers").insert({ ...barberData, user_id: user.id }).select().maybeSingle();
      if (data) setBarberId(data.id);
    }
    await supabase.from("profiles").upsert({ user_id: user.id, full_name: form.full_name, phone }, { onConflict: "user_id" });
    setLoading(false);
    toast.success(t("dash.barber.saved"));
  };

  const Field = ({ label, children }: any) => (
    <div>
      <label className="text-xs text-muted-foreground mb-1.5 block">{label}</label>
      {children}
    </div>
  );
  const inputCls = "w-full px-3 py-2 text-sm border border-border rounded-md bg-background";

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <PageHeader title={t("dash.barber.profileTitle")} subtitle={t("dash.barber.profileSubtitle")} />

      <form onSubmit={save} className="space-y-4">
        <Card>
          <h3 className="text-sm font-semibold mb-4">{t("dash.barber.profilePhoto")}</h3>
          <div className="flex items-center gap-4">
            <div className="w-32 h-32 rounded-full bg-muted overflow-hidden">
              {form.photo_url && <img src={form.photo_url} alt="" className="w-full h-full object-cover" />}
            </div>
            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-secondary rounded-md cursor-pointer">
              <Upload className="w-3.5 h-3.5" /> {uploading === "photo" ? "..." : t("dash.barber.uploadImage")}
              <input type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0], "photo")} />
            </label>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold mb-4">{t("dash.barber.basicInfo")}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label={t("dash.barber.fullName")}><input className={inputCls} value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} required /></Field>
            <Field label={t("dash.barber.username")}><input className={inputCls} value={form.username || ""} onChange={(e) => setForm({ ...form, username: e.target.value })} placeholder="aziz_barber" /></Field>
            <Field label={t("auth.phone")}><input className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+998..." /></Field>
            <Field label={t("dash.barber.telegram")}><input className={inputCls} value={form.telegram_username || ""} onChange={(e) => setForm({ ...form, telegram_username: e.target.value })} placeholder="@username" /></Field>
            <Field label={t("dash.barber.specialty")}><input className={inputCls} value={form.specialty || ""} onChange={(e) => setForm({ ...form, specialty: e.target.value })} placeholder="Fade, Beard..." /></Field>
            <Field label={t("dash.barber.experience")}><input type="number" min={0} className={inputCls} value={form.experience_years || 0} onChange={(e) => setForm({ ...form, experience_years: Number(e.target.value) })} /></Field>
            <div className="sm:col-span-2"><Field label={t("dash.barber.bio")}><textarea rows={3} className={inputCls} value={form.bio || ""} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></Field></div>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> {t("dash.barber.location")}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label={t("dash.barber.region")}>
              <select className={inputCls} value={form.region || ""} onChange={(e) => setForm({ ...form, region: e.target.value })}>
                <option value="">—</option>
                {["Toshkent","Samarqand","Buxoro","Andijon","Farg'ona","Namangan","Qashqadaryo","Surxondaryo","Xorazm","Navoiy","Jizzax","Sirdaryo","Qoraqalpog'iston"].map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </Field>
            <Field label={t("dash.barber.district")}>
              <input className={inputCls} value={form.district || ""} onChange={(e) => setForm({ ...form, district: e.target.value })} placeholder="Yunusobod, Chilonzor..." />
            </Field>
            <Field label={t("dash.barber.salonName")}><input className={inputCls} value={form.salon_name || ""} onChange={(e) => setForm({ ...form, salon_name: e.target.value })} /></Field>
            <Field label={t("dash.barber.address")}><input className={inputCls} value={form.salon_address || ""} onChange={(e) => setForm({ ...form, salon_address: e.target.value })} /></Field>
            <div className="sm:col-span-2"><Field label={t("dash.barber.mapLink")}><input className={inputCls} value={form.map_link || ""} onChange={(e) => setForm({ ...form, map_link: e.target.value })} placeholder="https://maps.google.com/..." /></Field></div>
            <Field label={t("dash.barber.genderClient")}>
              <select className={inputCls} value={form.gender || "any"} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
                <option value="any">{t("dash.barber.genderAny")}</option>
                <option value="male">{t("dash.barber.genderMale")}</option>
                <option value="female">{t("dash.barber.genderFemale")}</option>
              </select>
            </Field>
            <Field label={t("dash.barber.latitude")}><input type="number" step="0.000001" className={inputCls} value={form.latitude || ""} onChange={(e) => setForm({ ...form, latitude: e.target.value ? Number(e.target.value) : null })} placeholder="41.311081" /></Field>
            <Field label={t("dash.barber.longitude")}><input type="number" step="0.000001" className={inputCls} value={form.longitude || ""} onChange={(e) => setForm({ ...form, longitude: e.target.value ? Number(e.target.value) : null })} placeholder="69.240562" /></Field>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.home_service} onChange={(e) => setForm({ ...form, home_service: e.target.checked })} /> {t("dash.barber.homeService")}</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.busy_status} onChange={(e) => setForm({ ...form, busy_status: e.target.checked })} /> {t("dash.barber.busyStatus")}</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.fast_response || false} onChange={(e) => setForm({ ...form, fast_response: e.target.checked })} /> {t("dash.barber.fastResponse")}</label>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold mb-4">{t("dash.barber.socialMedia")}</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Field label={<><Instagram className="w-3 h-3 inline" /> Instagram</>}><input className={inputCls} value={form.instagram || ""} onChange={(e) => setForm({ ...form, instagram: e.target.value })} placeholder="@username" /></Field>
            <Field label={<><Send className="w-3 h-3 inline" /> TikTok</>}><input className={inputCls} value={form.tiktok || ""} onChange={(e) => setForm({ ...form, tiktok: e.target.value })} placeholder="@username" /></Field>
            <Field label={<><Youtube className="w-3 h-3 inline" /> YouTube</>}><input className={inputCls} value={form.youtube || ""} onChange={(e) => setForm({ ...form, youtube: e.target.value })} placeholder="channel" /></Field>
          </div>
        </Card>

        <button disabled={loading} className="px-5 py-2.5 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 disabled:opacity-50">
          {loading ? t("action.saving") : t("action.save")}
        </button>
      </form>
    </div>
  );
}
