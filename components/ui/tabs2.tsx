"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          `flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto 
          sm:overflow-visible no-visible-scrollbar max-w-full w-full text-white`,
          containerClassName
        )}
      >
        <div>
        <div className='stroke-yellow-300 text-left select-none text-[3rem] md:text-[4rem] 
        font-extrabold z-0 opacity-80 text-transparent text-nowrap pb-10' 
        style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", 
        WebkitTextStrokeColor: "yellow" }}>
                {"<"}Projects {"/>"}
            </div>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value ? (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 dark:bg-zinc-200 rounded-full opacity-0 text-white font-extrabold text-xl",
                  activeTabClassName
                )}
              />
            ) : (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-slate-200 dark:bg-zinc-800 rounded-full opacity-0 bg-transparent text-slate-400 text-xl",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block px-4 py-2 text-white dark:text-white text-lg hover:text-yellow-300 transition-all 
            duration-300 before:absolute before:inset-0 before:bg-yellow-300 before:opacity-0 
            before:hover:opacity-20 before:py-2 before:px-4 before:rounded-none">
              {tab.title}
            </span>
          </button>
        ))}
        </div>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-10", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute bottom-0 left-0 mb-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
