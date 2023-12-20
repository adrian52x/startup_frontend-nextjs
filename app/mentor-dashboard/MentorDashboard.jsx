'use client';
import { useState } from "react";

import EmptyState from "../components/EmptyState";
import PendingMeetings from "./meetingTabs/PendingMeetings";

const MentorDashboard = ({meetings, currentUser}) => { 
    //console.log(meetings);

    const [selectedTab, setSelectedTab] = useState('Upcoming');

    const tabs = ['Upcoming', 'Pending', 'Canceled', 'Completed'];

    const meetingsCount = {
        Upcoming: meetings.filter(meeting => meeting.status === 'accepted'),
        Pending: meetings.filter(meeting => meeting.status === 'pending'),
        Canceled: meetings.filter(meeting => meeting.status === 'declined'),
        Completed: meetings.filter(meeting => meeting.status === 'completed'),
    };

    const tabContent = {
        Upcoming: {
          content: <div>Upcoming content</div>,
          emptyState: "You currently don't have any upcoming meetings."
        },
        Pending: {
          content: <PendingMeetings meetings={meetingsCount.Pending}/>,
          emptyState: "You currently don't have any pending meetings."
        },
        Canceled: {
            content: <div>Canceled content</div>,
            emptyState: "You currently don't have any canceled meetings."
        },
        Completed: {
            content: <div>Completed content</div>,
            emptyState: "You currently don't have any completed meetings."
        },
    };

    return (
        <div className="w-full max-w-[1440px] md:mx-auto lg:px-20 md:px-10 sm:px-6 "> 
				<div className="text-3xl pt-[64px]">Welcome, {currentUser.firstName}!</div>
				<div className="py-[64px] space-y-6">
					<div className="text-xl">Your meetings</div>
					<div className="flex items-center space-x-2 max-w-[1280px]">
                        {tabs.map(tab => (
                            <div
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`${selectedTab === tab ? 'border-black bg-neutral-100' : 'border-neutral-300'} border rounded-full py-2 px-4 hover:border-black transition cursor-pointer`}
                            >
                                {tab} ({meetingsCount[tab].length})
                            </div>
                        ))}
					</div>

                    {selectedTab && meetingsCount[selectedTab].length > 0 ? (
                            tabContent[selectedTab].content
                        ) : (
                            <div className="rounded-lg bg-neutral-100 h-[200px]">
                                <EmptyState
                                title=''
                                subtitle={tabContent[selectedTab].emptyState}
                                customHeight="h-[200px]"
                                />
                            </div>
                        )
                    }

					
				</div>
			</div>
    );


}


export default MentorDashboard;