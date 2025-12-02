import { 
  MapPin, 
  Building2, 
  GraduationCap, 
  Wallet, 
  Briefcase, 
  FileText, 
  IdCard 
} from "lucide-react";

export default function QASidebar() {
  const categories = [
    {
      title: "DESTINATION",
      items: [
        { icon: MapPin, label: "Student experience", active: true },
        { icon: MapPin, label: "Culture and Lifestyle" },
        { icon: MapPin, label: "Education and learning" },
        { icon: MapPin, label: "Affordability" },
      ]
    },
    {
      title: "INSTITUTIONS",
      items: [
        { icon: Building2, label: "Student life" },
        { icon: Building2, label: "Rankings and USPs" },
        { icon: Building2, label: "Education and research" },
        { icon: Building2, label: "Communication" },
      ]
    },
    {
      title: "EDUCATION OPTIONS",
      items: [
        { icon: GraduationCap, label: "Subject and specialisations" },
        { icon: GraduationCap, label: "Study level" },
        { icon: GraduationCap, label: "Qualification type" },
      ]
    },
    {
      title: "FUNDING AND FINANCE",
      items: [
        { icon: Wallet, label: "Investment" },
        { icon: Wallet, label: "Scholarships and funding" },
      ]
    },
    {
      title: "WORK AND CAREERS",
      items: [
        { icon: Briefcase, label: "During study" },
        { icon: Briefcase, label: "Career support" },
      ]
    },
    {
      title: "APPLICATION",
      items: [
        { icon: FileText, label: "Admission and application" },
        { icon: FileText, label: "Testing" },
      ]
    },
    {
      title: "VISA AND IMMIGRATION",
      items: [
        { icon: IdCard, label: "Travel planning" },
        { icon: IdCard, label: "Visa" },
      ]
    }
  ];

  return (
    <div className="w-64 hidden lg:block flex-shrink-0 pr-6 pt-2">
      <div className="space-y-8">
        {categories.map((category, idx) => (
          <div key={idx}>
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 pl-2">{category.title}</h4>
            <ul className="space-y-1">
              {category.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <a href="#" className={`flex items-center gap-3 py-1.5 px-2 rounded-lg text-[13px] transition-all ${item.active ? 'text-[#3b66f5] font-semibold bg-blue-50/50' : 'text-slate-600 hover:text-[#3b66f5] hover:bg-slate-50'}`}>
                    <div className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${item.active ? 'bg-blue-100 text-[#3b66f5]' : 'bg-slate-100 text-slate-400'}`}>
                       <item.icon className="h-3 w-3" />
                    </div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
