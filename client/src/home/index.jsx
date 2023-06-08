import Business from './business'
import { useGetBusinessQuery} from '../redux/businessReducer';

const Home = () => {
    const {data, error, isLoading} = useGetBusinessQuery()
    
    let businesses
    if(isLoading){
        console.log(isLoading)
        businesses = [1,2,3]
    }
    else if(error){
        businesses = [1,2]
        console.log(error)
    }
    else{
        console.log(data)
        businesses = data.list
    }

    return (
        <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-6 p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                    Subjects
                </h6>
            </div>

            {/* Subjects list */}
            <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full table-auto">
                    <thead>
                        <tr className='flex justify-between'>
                            <th className="border-b w-1/4 border-green-600 py-3 px-5 text-center">
                                <p className="block antialiased font-sans text-sm font-bold">
                                    Business
                                </p>
                            </th>
                            <th className="border-b w-1/4 border-green-600 py-3 px-5 text-center">
                                <p className="block antialiased font-sans text-sm font-bold">
                                    Teacher
                                </p>
                            </th>
                            <th className="border-b w-1/4 border-green-600 py-3 px-5 text-center">
                                <p className="block antialiased font-sans text-sm font-bold">
                                    Attendance
                                </p>
                            </th>
                            <th className="border-b w-1/4 border-green-600 py-3 px-5 text-center">
                                <p className="block antialiased font-sans text-sm font-bold ">
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {businesses.map(business => {
                            return <Business business={business}/>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home