import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Maximize2,
  MoveHorizontal,
  Building2,
  BedDouble,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  School,
  ShoppingBag,
  Plane,
  Store,
  ArrowRight,
} from "lucide-react";

import img1 from "@/assets/property/1.jpg";
import img2 from "@/assets/property/2.jpg";
import img3 from "@/assets/property/3.jpg";
import img4 from "@/assets/property/4.jpg";
import img5 from "@/assets/property/5.jpg";
import img6 from "@/assets/property/6.jpg";
import img7 from "@/assets/property/7.jpg";
import img8 from "@/assets/property/8.jpg";
import img9 from "@/assets/property/9.jpg";
import img10 from "@/assets/property/10.jpg";

const PHONE = "0868612719";
const EMAIL = "ceosothhome@gmail.com";

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Quý khách vui lòng cung cấp họ tên và số điện thoại");
      return;
    }
    toast.success("Trân trọng cảm ơn Quý khách. Chuyên viên sẽ liên hệ trong 15 phút.");
    setForm({ name: "", phone: "", message: "" });
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const specs = [
    { icon: Maximize2, label: "Diện tích sàn", value: "60 m²" },
    { icon: MoveHorizontal, label: "Mặt đường", value: "15 m" },
    { icon: Building2, label: "Quy mô", value: "4 Tầng" },
    { icon: BedDouble, label: "Phòng ngủ", value: "4 PN" },
  ];

  const gallery = [
    { src: img1, label: "Mặt tiền tân cổ điển" },
    { src: img2, label: "Trục đường thương mại 15m" },
    { src: img3, label: "Phòng khách & Garage liền kề" },
    { src: img4, label: "Bếp tích hợp tiêu chuẩn châu Âu" },
    { src: img9, label: "Cầu thang điêu khắc" },
    { src: img6, label: "Phòng ngủ master sàn gỗ tự nhiên" },
    { src: img7, label: "Suite ngủ tối giản tinh tế" },
    { src: img5, label: "Không gian sinh hoạt chung" },
    { src: img10, label: "Sân thượng giếng trời" },
  ];

  const amenities = [
    { icon: ShoppingBag, label: "Chợ Bến Láng truyền thống", dist: "200 m" },
    { icon: School, label: "Cụm trường liên cấp", dist: "500 m" },
    { icon: Store, label: "TTTM BigC / GO! Hải Phòng", dist: "1.5 km" },
    { icon: Plane, label: "Cảng HK Quốc tế Cát Bi", dist: "4 km" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-navy-deep/85 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-sm bg-gradient-gold flex items-center justify-center font-serif text-luxury-navy-deep font-bold">
              S
            </div>
            <div className="text-white">
              <div className="font-serif text-lg leading-none">SOTH Home</div>
              <div className="text-[10px] tracking-[0.3em] text-luxury-gold uppercase">Premium Estate</div>
            </div>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="hidden md:inline-flex items-center gap-2 text-white/90 hover:text-luxury-gold transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={img1}
            alt="Mặt tiền nhà phố Số 63 Bến Láng"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="container mx-auto relative z-10 pt-24 pb-16">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-gold/15 border border-luxury-gold/40 backdrop-blur-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-luxury-gold animate-pulse" />
              <span className="text-luxury-gold text-xs tracking-[0.25em] uppercase font-medium">
                Tuyến 2 Lê Hồng Phong • Hải Phòng
              </span>
            </div>

            <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance mb-6">
              Số 63 Bến Láng
              <span className="block mt-3 gradient-gold-text italic">
                Kiệt tác nhà phố thương mại 2026
              </span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Tài sản giới hạn tại tuyến 2 Lê Hồng Phong — 4 tầng kiến trúc tân cổ điển,
              60m² thổ cư, mặt đường 15m. Một địa chỉ định danh đẳng cấp chủ nhân.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo("contact")}
                size="lg"
                className="bg-gradient-gold text-luxury-navy-deep hover:opacity-90 hover:scale-[1.02] transition-all shadow-gold font-semibold px-8 h-14 text-base rounded-none"
              >
                Đặt lịch tham quan riêng tư
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollTo("gallery")}
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white hover:text-luxury-navy-deep h-14 px-8 rounded-none"
              >
                Khám phá không gian
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em] uppercase">
          Khám phá
        </div>
      </section>

      {/* SPECS */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-3">Đặc trưng kiến tạo</div>
            <h2 className="font-serif text-luxury-navy text-4xl md:text-5xl mb-4">
              Tỉ lệ hoàn hảo — Công năng tối ưu
            </h2>
            <div className="w-16 h-px bg-luxury-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {specs.map((s) => (
              <div
                key={s.label}
                className="group bg-white p-8 text-center shadow-card-luxe hover:shadow-luxe transition-all duration-500 hover:-translate-y-1 border-t-2 border-luxury-gold/0 hover:border-luxury-gold"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center bg-luxury-navy mb-5 group-hover:bg-gradient-gold transition-all">
                  <s.icon className="w-7 h-7 text-luxury-gold group-hover:text-luxury-navy-deep transition-colors" />
                </div>
                <div className="text-3xl font-serif text-luxury-navy mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden shadow-luxe group">
              <img src={img9} alt="Cầu thang" className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden shadow-luxe group">
              <img src={img3} alt="Phòng khách" className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-luxury-navy-deep">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-3">Trải nghiệm không gian</div>
            <h2 className="font-serif text-white text-4xl md:text-5xl mb-4">
              Mỗi khung hình — Một chuẩn mực sống
            </h2>
            <div className="w-16 h-px bg-luxury-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-[400px] md:h-[600px]" : "h-[290px]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy-deep/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-luxury-gold text-[10px] tracking-[0.3em] uppercase mb-1">
                    0{i + 1}
                  </div>
                  <div className="text-white font-serif text-xl">{g.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-3">Vị trí chiến lược</div>
              <h2 className="font-serif text-luxury-navy text-4xl md:text-5xl mb-6 leading-tight">
                Trung tâm Lê Hồng Phong — Nhịp đập thương mại Hải Phòng
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                An tọa tại Số 63 Bến Láng — tuyến 2 đại lộ Lê Hồng Phong, kết nối liền mạch
                tới hệ sinh thái tiện ích cao cấp, trung tâm thương mại, hệ thống giáo dục
                và Cảng hàng không quốc tế Cát Bi.
              </p>

              <div className="space-y-4">
                {amenities.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center justify-between p-5 bg-white shadow-card-luxe border-l-2 border-luxury-gold"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 bg-luxury-navy flex items-center justify-center">
                        <a.icon className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <span className="font-medium text-luxury-navy">{a.label}</span>
                    </div>
                    <span className="text-sm text-luxury-gold font-semibold">{a.dist}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative shadow-luxe overflow-hidden h-[560px]">
              <iframe
                title="Bản đồ Số 63 Bến Láng"
                src="https://www.google.com/maps?q=B%E1%BA%BFn+L%C3%A1ng,+L%C3%AA+H%E1%BB%93ng+Phong,+H%E1%BA%A3i+Ph%C3%B2ng&output=embed"
                className="w-full h-full border-0 grayscale-[20%]"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 bg-luxury-navy-deep text-white px-5 py-3 shadow-gold">
                <div className="flex items-center gap-2 text-luxury-gold text-[10px] tracking-[0.3em] uppercase">
                  <MapPin className="w-3 h-3" /> Định vị
                </div>
                <div className="font-serif text-lg mt-1">Số 63 Bến Láng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={img1} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-white">
              <div className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-3">Bảo chứng pháp lý</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                Sổ đỏ chính chủ.<br />
                <span className="gradient-gold-text italic">Công chứng sang tên trong ngày.</span>
              </h2>
              <p className="text-white/70 mb-10 leading-relaxed max-w-md">
                Hồ sơ pháp lý hoàn thiện, minh bạch tuyệt đối. Hỗ trợ phương án tài chính
                và vay vốn ngân hàng đến 70% giá trị tài sản. Đội ngũ chuyên viên SOTH Home
                đồng hành tận tâm từ tư vấn đến công chứng giao dịch.
              </p>

              <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 border border-luxury-gold/30">
                <ShieldCheck className="w-8 h-8 text-luxury-gold flex-shrink-0" />
                <div>
                  <div className="font-serif text-white text-lg">Sổ đỏ riêng — Pháp lý sạch</div>
                  <div className="text-white/60 text-sm">Hồ sơ thẩm định trực tiếp tại văn phòng giao dịch</div>
                </div>
              </div>

              <div className="space-y-4">
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                  <div className="h-12 w-12 bg-gradient-gold flex items-center justify-center">
                    <Phone className="w-5 h-5 text-luxury-navy-deep" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">Đường dây chuyên viên 24/7</div>
                    <div className="text-white text-xl font-serif group-hover:text-luxury-gold transition-colors">
                      {PHONE}
                    </div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                  <div className="h-12 w-12 bg-gradient-gold flex items-center justify-center">
                    <Mail className="w-5 h-5 text-luxury-navy-deep" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">Thư điện tử</div>
                    <div className="text-white text-lg group-hover:text-luxury-gold transition-colors">
                      {EMAIL}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-10 shadow-luxe">
              <h3 className="font-serif text-luxury-navy text-3xl mb-2">Đặt lịch tham quan</h3>
              <p className="text-muted-foreground mb-8 text-sm">
                Quý khách vui lòng để lại thông tin — Chuyên viên cao cấp sẽ liên hệ trong vòng 15 phút.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-luxury-navy font-semibold">Quý danh *</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="mt-2 h-12 rounded-none border-luxury-navy/20 focus-visible:ring-luxury-gold"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-luxury-navy font-semibold">Số điện thoại *</label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0868 xxx xxx"
                    className="mt-2 h-12 rounded-none border-luxury-navy/20 focus-visible:ring-luxury-gold"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-luxury-navy font-semibold">Yêu cầu riêng</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tôi mong muốn tham quan vào cuối tuần..."
                    rows={4}
                    className="mt-2 rounded-none border-luxury-navy/20 focus-visible:ring-luxury-gold resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 bg-luxury-navy hover:bg-luxury-navy-deep text-white rounded-none font-semibold tracking-wider uppercase text-sm"
                >
                  Gửi yêu cầu tham quan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-luxury-navy-deep border-t border-white/5 py-8">
        <div className="container mx-auto text-center text-white/50 text-sm">
          © 2026 SOTH Home – Premium Real Estate. Số 63 Bến Láng, Lê Hồng Phong, Hải Phòng.
        </div>
      </footer>
    </div>
  );
};

export default Index;
