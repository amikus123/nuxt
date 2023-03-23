import { UserState, UserWithoutPassword } from "./../types/user";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: (): Store => {
    return { user: null };
  },
  actions: {
    setUserValue(newValue: UserWithoutPassword) {
      this.user = newValue;
    },
    resetUserValue() {
      this.user = null;
    },
  },
});

export interface Store {
  user: UserState;
}
