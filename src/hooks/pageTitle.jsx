import { useEffect } from "react"

export default function pageTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
