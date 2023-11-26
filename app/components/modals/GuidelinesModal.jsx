'use client';

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";


import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import useGuidelinesModal from "@/app/hooks/useGuidelinesModal";

const GuidelinesModal = () => {
  //const router = useRouter();
  const guidelinesModal = useGuidelinesModal();

  const [isLoading, setIsLoading] = useState(false);


	const bodyContent = (
		<div className="flex flex-col gap-4">
            <Heading
                title="1. Title"
                subtitle="subtitle"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi.</p>
            
            <Heading
                title="2. Title"
                subtitle="subtitle"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi.</p>
            <Heading
                title="3. Title"
                subtitle="subtitle"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi.</p>
            <Heading
                title="4. Title"
                subtitle="subtitle"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi. Sed aliquam, sapien eu fringilla fringilla, lectus justo finibus orci, ac tincidunt elit turpis eu mi.</p>
            
		</div>
	)

	const footerContent = (
		<div className="flex flex-col gap-4 mt-3">
		<hr />
		<div className="
		text-neutral-500 text-center mt-4 font-light">
			<p>Footer text </p>
		</div>
		</div>
	)

	return (
		<Modal
		isOpen={guidelinesModal.isOpen}
		title="Guidelines"
		onClose={guidelinesModal.onClose}
		body={bodyContent}
		footer={footerContent}
		/>
	);
}

export default GuidelinesModal;