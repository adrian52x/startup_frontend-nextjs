
import EmptyState from "../components/EmptyState";


const MentoringPage = async () => {
  
		return (
			<div className="hidden lg:block lg:pl-80 h-full">
				<EmptyState
				title='Your reservations'
				subtitle="Select a reservation to view more details"
				/>
			</div>

		)

}
 
export default MentoringPage;