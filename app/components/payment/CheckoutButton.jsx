import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { toast } from "react-hot-toast";

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = ({ meeting, currentUser }) => {
    const router = useRouter();

    // meeting props just for view
    // let meeting = {
    //     receiver: mentor._id,
    //     sender: currentUser._id,
    //     receiverFullName: mentor.firstName + ' ' + mentor.lastName,
    //     senderFullName: currentUser.firstName + ' ' + currentUser.lastName,
    //     date: selectedDate,
    //     time: selectedTime,
    //     price: mentor.price
    // }
    
    const handler = async () => {
        if (!currentUser) { 
            toast.error('You must be logged in to book a session');
            return;
        }
        
        try {
            
            const stripe = await asyncStripe;
            const res = await fetch("/api/stripe", {
                method: "POST",
                body: JSON.stringify({
                meeting
                }),
                headers: { "Content-Type": "application/json" },
            });

            const { sessionId } = await res.json();

            const { error } = await stripe.redirectToCheckout({ sessionId });
            console.log(error);
            if (error) {
                router.push("/payment/error");
            } 
            } catch (err) {
            console.log(err);
            router.push("/payment/error");
        }
    };

    return (
        // <button
        //   onClick={handler}
        //   className="bg-blue-700 hover:bg-blue-800 duration-200 px-8 py-4 text-white"
        // >
        //   Checkout
        // </button>
        <Button
            customWidth={"w-3/5"}
            label="Checkout"
            small
            onClick={() => handler()}  >
        </Button>
    );
};

export default CheckoutButton;