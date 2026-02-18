import { Student } from '../lib/supabase';
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  ShieldCheck,
  ArrowLeft,
  FileDown,
  Pencil,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  student: Student;
}

export default function StudentProfilePage({ student }: Props) {
  const navigate = useNavigate();

  const attendance = Number(student.attendance_percentage ?? 0);
  const presentDays = Number(student.present_today ?? 0);
  const leaveTaken = Number(student.leave_taken ?? 0);

  return (
    <div className="bg-[#f5f5f9] min-h-screen">
      {/* ================= HEADER ================= */}
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Profile Info */}
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-[#00c853] flex items-center justify-center">
              <User className="text-white" size={36} strokeWidth={2} />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {student.name}
                </h1>
                <span className="text-xs px-2.5 py-1 rounded bg-[#e8f5e9] text-[#2e7d32] font-medium">
                  Active Student
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-0.5">
                <GraduationCap size={14} />
                <span>Bachelor of Computer Applications (BCA)</span>
                <span>•</span>
                <span>{student.year} Year</span>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500">
                <ShieldCheck size={12} />
                <span>ID: {student.register_no}</span>
              </div>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <Pencil size={16} />
              Edit Profile
            </button>

            <button className="px-4 py-2 bg-[#2196f3] text-white rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#1976d2] transition-colors">
              <FileDown size={16} />
              Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* ===== LEFT COLUMN ===== */}
          <div className="col-span-8 space-y-6">
            {/* PERSONAL INFORMATION */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <User size={18} className="text-[#2196f3]" />
                  Personal Information
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Legal and contact details of the student
                </p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                  <InfoField
                    icon={<User size={14} className="text-gray-400" />}
                    label="FATHER'S NAME"
                    value={student.father_name}
                  />
                  <InfoField
                    icon={<User size={14} className="text-gray-400" />}
                    label="MOTHER'S NAME"
                    value={student.mother_name}
                  />
                  <InfoField
                    icon={<Calendar size={14} className="text-gray-400" />}
                    label="DATE OF BIRTH"
                    value={student.dob}
                  />
                  <InfoField
                    icon={<ShieldCheck size={14} className="text-gray-400" />}
                    label="BLOOD GROUP"
                    value={student.blood_group}
                  />
                  <InfoField
                    icon={<Phone size={14} className="text-gray-400" />}
                    label="PERSONAL PHONE"
                    value={student.phone_number}
                  />
                  <InfoField
                    icon={<Phone size={14} className="text-gray-400" />}
                    label="PARENT'S PHONE"
                    value={student.parents_number}
                  />
                  <InfoField
                    icon={<Mail size={14} className="text-gray-400" />}
                    label="EMAIL ADDRESS"
                    value={student.email}
                  />
                  <InfoField
                    icon={<MapPin size={14} className="text-gray-400" />}
                    label="HOUSING TYPE"
                    value={student.hostel}
                  />
                  <div className="col-span-2">
                    <InfoField
                      icon={<MapPin size={14} className="text-gray-400" />}
                      label="RESIDENTIAL ADDRESS"
                      value={student.address}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* INSTITUTIONAL RECORDS */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#00c853]" />
                  Institutional Records
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Academic track and conduct status
                </p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                  <InfoField
                    icon={<User size={14} className="text-gray-400" />}
                    label="ACADEMIC MENTOR"
                    value={student.mentor}
                  />
                  <InfoField
                    icon={<GraduationCap size={14} className="text-gray-400" />}
                    label="EXPECTED GRADUATION"
                    value={student.year_of_passing}
                  />
                  <InfoField
                    icon={<ShieldCheck size={14} className="text-gray-400" />}
                    label="DISCIPLINARY ACTIONS"
                    value={student.disciplinary_action || 'None'}
                  />
                </div>

                <button
                  onClick={() => navigate('/dashboard')}
                  className="mt-6 text-sm flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="col-span-4">
            <div className="bg-[#e3f2fd] rounded-lg border border-[#bbdefb] p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">
                  Attendance Analytics
                </h3>
                <span className="text-xs px-2.5 py-1 rounded bg-[#2196f3] text-white font-medium">
                  Current Semester
                </span>
              </div>

              {/* Large Attendance Circle */}
              <div className="flex justify-center mb-6">
                <div className="relative h-40 w-40">
                  <svg className="-rotate-90 h-full w-full">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#e3f2fd"
                      strokeWidth="12"
                      fill="white"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#2196f3"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(attendance / 100) * 439.8} 439.8`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">
                      {attendance.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Present Days</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {presentDays}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-red-600 flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    Leave Taken
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    {leaveTaken}
                  </span>
                </div>
              </div>

              {/* Warning Message */}
              {attendance < 75 && (
                <div className="bg-white border border-red-200 rounded-md p-3">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Attendance is below the institutional requirement of 75%.
                    Notification has been sent to the student and parents.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE FIELD COMPONENT ================= */
interface InfoFieldProps {
  icon: React.ReactNode;
  label: string;
  value?: string | number | null;
}

function InfoField({ icon, label, value }: InfoFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 uppercase tracking-wide">
        {icon}
        {label}
      </div>
      <div className="text-sm text-gray-900 font-medium">
        {value || 'N/A'}
      </div>
    </div>
  );
}