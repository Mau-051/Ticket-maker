import create from "zustand";

const useStore = create((set) => ({
  globalTickets: new Map(),
  addGlobalTicket: (ticketStr, ticketObj) => {
    set((state) => {
      state.globalTickets.set(ticketStr, ticketObj);
      return {
        globalTickets: new Map(state.globalTickets),
      };
    });
  },
  globalTicketsTotal: 0,
  setGlobalTicketsTotal: (newTotal) => {
    set((state) => {
      state.globalTicketsTotal = newTotal;
      return {
        globalTicketsTotal: state.globalTicketsTotal,
      };
    });
  },
}));

export default useStore;
