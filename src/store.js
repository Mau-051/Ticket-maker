import create from "zustand";

const useStore = create((set) => ({
  globalTicket: new Map(),
  addGlobalTicket: (ticketStr, ticketObj) => {
    set((state) => {
      state.globalTicket.set(ticketStr, ticketObj);
      return {
        globalTicket: new Map(state.globalTicket),
      };
    });
  },
  clearGlobalTicket: () => {
    set((state) => {
      state.globalTicket.clear();
      return {
        globalTicket: new Map(state.globalTicket),
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
  savedTickets: [],
  addSavedTicket: (newTicket) => {
    set((state) => {
      state.savedTickets.push(newTicket);
      return {
        savedTickets: state.savedTickets,
      };
    });
  },
}));

export default useStore;
