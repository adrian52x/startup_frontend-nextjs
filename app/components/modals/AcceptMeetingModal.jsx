'use client';

import { useCallback, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";

import { TextInput } from "@tremor/react";
import { Textarea } from "@tremor/react";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import useAcceptMeetingModal from "@/app/hooks/useAcceptMeetingModal";
import { LuAsterisk } from "react-icons/lu";


const AcceptMeetingModal = () => {
  	const router = useRouter();
	const acceptMeetingModal = useAcceptMeetingModal();
	const meetingId = acceptMeetingModal.meetingId;

	const [isLoading, setIsLoading] = useState(false);

  	const [link, setLink] = useState('');
	const [note, setNote] = useState('');
	const [linkError, setLinkError] = useState(false);

	useEffect(() => {
		// Reset the states when the meetingId changes
		setLink('');
		setNote('');
	}, [meetingId]);


	const handleConfirm = () => {
		if (!link) {
		  setLinkError(true);
		  return;
		}

		// console.log("meeting accepted", link, note);
		
	  
		// Make the API call
		fetch('http://localhost:5000/api/meetings/accept', {
		  method: 'PUT',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ meetingId, link, note }),
		})
		.then(response => response.json())
		.then(data => {
		  	// Handle the response
		  	toast.success('Meeting accepted');
			acceptMeetingModal.onClose();
			console.log(data);
			acceptMeetingModal.actionTakenOnMeeting(meetingId); // Mark an action as taken
			router.refresh();
		})
		.catch(error => {
		  // Handle the error
		});
	};


	const bodyContent = (
		<div className="flex flex-col gap-4">

			{/* {acceptMeetingModal.meetingId} */}
			<a href="https://meet.google.com/" className="text-blue-500 underline hover:text-blue-800" target="_blank">Google Meet</a>
			<img
                src={'/images/googlemeet.jpg'}
                className="h-[225px] w-[350px] border-2 border-neutral rounded-lg"
            />
            
            <TextInput 
				icon={LuAsterisk} 
				placeholder="Google Meet Link" 
				type="url"
				value={link}
				onValueChange={setLink}
				error={linkError}
				errorMessage="This field is required"  
			/>
            <Textarea 
				placeholder="Note (optional)" 
				value={note}
  				onValueChange={setNote}
			/>


			<Button
                    label="Accept"
                    onClick={handleConfirm}  >
            </Button>
			<Button
                    label="Decline"
					outline
                    onClick={() => console.log("declined")}  >
            </Button>
            
		</div>
	)

	return (
		<Modal
		isOpen={acceptMeetingModal.isOpen}
		title="Accept Meeting"
		onClose={acceptMeetingModal.onClose}
		// actionLabel="Accept"
		// secondaryActionLabel="Decline"
		// onSubmit={handleSubmit(handleConfirm)}
		// secondaryAction={handleConfirm}
		body={bodyContent}
		// footer={footerContent}
		/>
	);
}

export default AcceptMeetingModal;