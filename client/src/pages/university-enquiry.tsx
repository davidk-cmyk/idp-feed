import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, HelpCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function UniversityEnquiry() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Sent",
        description: "Your enquiry has been successfully sent to the university.",
        duration: 5000,
      });
      setLocation("/university/1");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Navigation />

      <div className="w-full max-w-3xl mx-auto px-4 pb-24">
        
        {/* Back Navigation */}
        <div className="w-full mb-6">
          <Link href="/university/1">
            <Button 
              variant="ghost" 
              className="pl-0 text-slate-500 hover:text-[#3b66f5] hover:bg-transparent gap-1 group"
            >
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to University Profile</span>
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Enquiry Form</h1>
            <p className="text-slate-600 text-sm">
              To avoid delays you MUST include your Application/Student ID and course of interest.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-10">
            
            {/* About you */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-2">About you</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="given-name">Given name <span className="text-red-500">*</span></Label>
                  <Input id="given-name" required placeholder="" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="family-name">Family name <span className="text-red-500">*</span></Label>
                  <Input id="family-name" required placeholder="" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">Date of birth (dd/mm/yyyy) <span className="text-red-500">*</span></Label>
                <Input id="dob" type="date" required className="max-w-[200px]" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                <Input id="email" type="email" required placeholder="" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Mobile phone <span className="text-red-500">*</span></Label>
                <div className="flex gap-2">
                  <div className="w-[100px] flex items-center border rounded-md px-3 bg-slate-50">
                    <span className="text-xl mr-2">🇦🇺</span>
                    <span className="text-sm">+61</span>
                  </div>
                  <Input id="phone" type="tel" required className="flex-1" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="describe">Please describe yourself <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="describe">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prospective">Prospective Student</SelectItem>
                    <SelectItem value="current">Current Student</SelectItem>
                    <SelectItem value="parent">Parent / Guardian</SelectItem>
                    <SelectItem value="agent">Education Agent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country of residence <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="cn">China</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="np">Nepal</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="residency">Australian residency status <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="residency">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="citizen">Australian Citizen</SelectItem>
                    <SelectItem value="permanent">Permanent Resident</SelectItem>
                    <SelectItem value="student">Student Visa</SelectItem>
                    <SelectItem value="other">Other Visa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Study preferences */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-2">Study preferences</h3>

              <div className="space-y-2">
                <Label htmlFor="commence">When do you wish to commence (year and month/intake)? <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input id="commence" className="pl-9" placeholder="e.g. 2025 Semester 1" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="region">Region <span className="text-red-500">*</span></Label>
                <Select>
                  <SelectTrigger id="region">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="melbourne">Melbourne</SelectItem>
                    <SelectItem value="sydney">Sydney</SelectItem>
                    <SelectItem value="brisbane">Brisbane</SelectItem>
                    <SelectItem value="adelaide">Adelaide</SelectItem>
                    <SelectItem value="perth">Perth</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Level of study interested in <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="level">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="undergrad">Undergraduate</SelectItem>
                    <SelectItem value="postgrad">Postgraduate</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                    <SelectItem value="short">Short Course</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accommodation">Are you interested in University Accommodation? <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="accommodation">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Area of interest</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Architecture, building, planning and design",
                    "Arts, humanities and social sciences",
                    "Business and economics",
                    "Education",
                    "Engineering",
                    "Environment",
                    "Health",
                    "Information technology and computer science",
                    "Law",
                    "Music and visual and performing arts",
                    "Science",
                    "Veterinary, agricultural and food sciences"
                  ].map((interest) => (
                    <div key={interest} className="flex items-start space-x-2">
                      <Checkbox id={interest} />
                      <label
                        htmlFor={interest}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                      >
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry details */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-2">Enquiry details</h3>

              <div className="space-y-2">
                <Label htmlFor="nature">What is the nature of your enquiry <span className="text-red-500">*</span></Label>
                <Select required>
                  <SelectTrigger id="nature">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="course">Course Information</SelectItem>
                    <SelectItem value="admission">Admission Requirements</SelectItem>
                    <SelectItem value="fees">Fees and Scholarships</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Enquiry description <span className="text-red-500">*</span></Label>
                <Textarea id="description" required className="min-h-[120px]" />
              </div>

              <div className="space-y-2">
                <Label>Attach file</Label>
                <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-slate-50">
                  <Button type="button" variant="outline" size="sm">Choose file</Button>
                  <span className="text-sm text-slate-500">No file chosen</span>
                </div>
                <p className="text-xs text-slate-400">
                  Supported file types: doc, docx, pdf, jpg, jpeg, png. Max file size: 5MB
                </p>
              </div>
            </div>

            {/* Collection notice */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-2">Collection notice</h3>
              
              <div className="p-4 bg-blue-50 rounded-lg text-sm text-blue-800 mb-4">
                The University is committed to protecting your privacy by meeting its responsibilities under applicable privacy laws, as detailed in the <a href="#" className="underline font-semibold">privacy collection notice</a>.
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy" required />
                  <label
                    htmlFor="privacy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5"
                  >
                    Yes, I have read and agree to the privacy collection notice <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="marketing" />
                  <label
                    htmlFor="marketing"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-0.5 leading-relaxed"
                  >
                    Yes, I would like to receive information about studying at the University, including news and study updates, event invitations and market research.
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full md:w-auto md:min-w-[200px] h-12 text-base font-bold bg-[#002d72] hover:bg-[#001f4d] text-white rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
