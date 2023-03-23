import { useUserStore } from "./../stores/user";
import { AuthResponese, AuthSignupDto } from "./../types/auth";
import { UserState, UserWithoutPassword } from "./../types/user";

export const useAuthCookie = () => useCookie("token");

interface UserAuth {
  registerWithEmail: ({ email, name, password }: AuthSignupDto) => Promise<any>;
  userLogout: () => Promise<any>;
  initializeUser: () => Promise<any>;
}
export const useAuth = (): UserAuth => {
  return { userLogout, registerWithEmail, initializeUser };
};

async function initializeUser() {
  console.log("pff");
  const authCookie = useAuthCookie().value;
  const userStore = useUserStore();
  const config = useRuntimeConfig();
  if (authCookie && !userStore.user) {
    const cookieHeaders = useRequestHeaders(["token"]);
    useFetch<AuthResponese>(`${config.public.API_URL}/auth/me`, {
      headers: { token: authCookie },
    }).then(({ data }) => {
      if (data?.value?.user !== undefined) {
        userStore.setUserValue(data.value?.user);
      }
    });
  }
}
async function userLogout() {
  const userStore = useUserStore();
  userStore.resetUserValue();
  const cookie = useAuthCookie();
  cookie.value = null;
}
async function registerWithEmail({
  email,
  name,
  password,
}: AuthSignupDto): Promise<any> {
  try {
    const config = useRuntimeConfig();
    const data = await $fetch<AuthResponese>(
      `${config.public.API_URL}/auth/signup`,
      {
        method: "POST",
        body: { name, email, password },
      }
    );

    if (data) {
      const { token, user } = data;
      const userStore = useUserStore();
      userStore.setUserValue(user);
      const cookie = useAuthCookie();
      cookie.value = token;
    }

    return { hasErrors: false, loggedIn: true };
  } catch (error: any) {
    console.error(error);
  }
}
