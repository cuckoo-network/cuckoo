import {useUser} from "@/containers/authentication/hooks/use-user";

export const Authenticated = ({children}: {children: React.ReactNode}) => {
  const {dataUser} = useUser();
  return <>
    <pre>{JSON.stringify(dataUser, null , 2)}</pre>
    {children}
  </>
}
