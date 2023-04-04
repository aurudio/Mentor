import Home from '@/components/screens/home/Home'
import { IMentorData } from '@/types/mentor.interface'
import { GetStaticProps, NextPage } from 'next'
import mentorService from '../services/mentor.services'

const HomePage: NextPage<IMentorData> = ({ mentors }) => {
	return <Home mentors={mentors} />
}

export const getServerSideProps: GetStaticProps<IMentorData> = async () => {
	const mentors = await mentorService.getAll()
	return {
		props: { mentors },
	}
}

export default HomePage
