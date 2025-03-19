"use client"

import LoaderUi from "@/components/LoaderUi";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";

function SchedulePage() {

  const router = useRouter();

  const {isInterviewer, isLoading} = useUserRole();

  if(isLoading) return <LoaderUi />
  if(!isInterviewer) router.push("/");


  return <InterviewScheduleUI />
}

export default SchedulePage;