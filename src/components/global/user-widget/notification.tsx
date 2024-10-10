"use client"

import { Bell } from "@/icons"
import GlassSheet from "../glass-sheet"

export const Notification = () => {
  return (
    <GlassSheet
      trigger={
        <span className="cursor-pointer">
          <Bell />
        </span>
      }
    >
      <div>Hello world</div>
    </GlassSheet>
  )
}
