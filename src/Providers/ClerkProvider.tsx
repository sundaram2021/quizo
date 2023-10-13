import { ClerkProvider } from '@clerk/nextjs'


const NextAuthProvider = ({ children } : { children : React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>
}

export default NextAuthProvider 