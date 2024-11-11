"use client"; // Error boundaries must be Client Components
import * as Sentry from "@sentry/nextjs";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  // useEffect(() => {
  //     // Log the error to an error reporting service
  //     console.error(error)
  //     Sentry.captureException(error);
  //     console.log(1);
  // }, [error])

  const openReportDialog = () => {
    Sentry.showReportDialog({
      title: "Oops! Something went wrong.",
      subtitle: "Help us improve by reporting the issue.",
      subtitle2: "Please provide as much detail as possible.",
      labelComments: "Describe what you were doing when the error occurred",
      labelEmail: "Your email address",
      labelName: "Your name",
      // Optional: Pass the error ID if you have it
      eventId: error?.eventId,
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-xl">Oops! Something went wrong.</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="border-b-[1px] border-solid border-zinc-600 px-2"
        >
          Try again
        </button>
        <button onClick={openReportDialog} className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-3 py-2">Report Crash</button>
      </div>
    </div>
  );
};

export default Error;
