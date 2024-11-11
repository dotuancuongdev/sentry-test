"use client";
import * as Sentry from "@sentry/react";
import { useEffect } from "react";
import "./globals.css";
import error from "./sentry-example-page/error";
// import ErrorScreen from "./components/ErrorSceen";

// Sentry.init({
//   dsn: "https://c7c235b77f8a2134cc2cbe9ab8b0af9a@o4508233616261120.ingest.us.sentry.io/4508233619931136",

//   // Add optional integrations for additional features
//   integrations: [
//     // Sentry.replayIntegration(),
//     Sentry.feedbackIntegration({
//       colorScheme: "system",
//       isEmailRequired: true,
//     }),
//   ],

//   beforeSend(event, hint) {
//     console.log("event", event);
//     if (event.level === "error") {
//       return;
//     }
//     // Check if it is an exception, and if so, show the report dialog
//     // if (event.exception && event.event_id) {
//     //   Sentry.showReportDialog({
//     //     eventId: event.event_id,
//     //   });
//     // }
//     return event;
//   },
// })

let a = [];
a = null;

export default function Home() {
  useEffect(() => {
    // a.test1556;
    // This logic is to emulate a crash
    
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <button
        onClick={() => {
          // a.test911;
          throw new Error("sample error 1");
        }}
        className=" bg-[#ff2727]  px-5 py-2 rounded-full text-white"
      >
        Click to throw an error: "sample error"
      </button>
      <button
        onClick={() => {
          a.test911;
          // throw new Error("sample error 2")
        }}
        className=" bg-[#ff7d20]  px-5 py-2 rounded-full text-white"
      >
        Click to throw an error but not send to sentry
      </button>
    </div>
  );
}
