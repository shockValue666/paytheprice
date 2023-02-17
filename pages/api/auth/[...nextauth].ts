import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signOut } from "next-auth/react";
import GoogleProvider from 'next-auth/providers/google'
import InstagramProvider from "next-auth/providers/instagram";


// import GithubProvider from "next-auth/providers/github"


export const authOptions:NextAuthOptions = {

    session:{
        strategy:"jwt"
    },

  providers: [
    GoogleProvider({
        clientId:process.env.GOOGLE_ID as string,
        clientSecret:process.env.GOOGLE_SECRET as string
    }),
    InstagramProvider({
        clientId: process.env.INSTAGRAM_ID,
        clientSecret: process.env.INSTAGRAM_SECRET,
        redirectUri:"https://73cd-94-66-36-211.ngrok.io/api/auth/callback/instagram",
        client: {
            token_endpoint_auth_method: 'client_secret_post',
        },
    }),
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        type:"credentials",

        credentials: {
            // email: { label: "Email", type: "text", placeholder: "john@gmail.com" },
            // password: { label: "Password", type: "password" }
            },
        async authorize(credentials, req) {
            const {email,password} = credentials as any;

            if(email!=="john@gmail.com" || password !== "1234"){
                throw new Error("invalid shit");
            }
            return {
                id:"1234",
                name:"poutsa",
                email
            }
        }
    })
  ],
  pages:{
    signIn:"/si/sic",
    error:"/", //complete it later,
    signOut:"/" //complete it later
  }
}

export default NextAuth(authOptions)