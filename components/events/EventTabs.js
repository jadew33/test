export default function EventTabs({ changeTab, currentTab }) {
  //function to switch tabs and passes data to parent
  function tabSwitch(tab) {
    changeTab(tab);
  }
  return (
    <section className="flex gap-[2rem] mt-[2rem] items-center max-lg:hidden">
      <button
        onClick={() => {
          //if not already on current tab
          if (!currentTab) {
            tabSwitch(!currentTab);
          }
          console.log(currentTab);
        }}
        className={`text-white text-lg whitespace-nowrap ${
          currentTab && "font-gothamBold underline"
        }`}
      >
        CALENDAR
      </button>
      <button
        onClick={() => {
          if (currentTab) {
            tabSwitch(!currentTab);
          }
        }}
        className={`text-white text-lg whitespace-nowrap ${
          !currentTab && "font-gothamBold underline"
        }`}
      >
        QUICK VIEW
      </button>
    </section>
  );
}
