import "@aws-amplify/ui-react/styles.css"
import { Amplify } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import awsExports from "@/aws-exports"

Amplify.configure(awsExports)

if (process.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    const { worker } = require("../mocks/browser")
    worker.start()
  }
}

function MyApp({ Component, pageProps, user, signOut }) {
  return <Component {...pageProps} user={user} signOut={signOut} />
}

export default withAuthenticator(MyApp, { hideSignUp: true })
