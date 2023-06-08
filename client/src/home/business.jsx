const Business = ({ business }) => {

    return (
        <tr className='flex justify-between' key={business}>
            <td className="py-3 px-5 w-1/4 border-b text-center">
                <p className="block antialiased text-sm">
                    {business}
                </p>
            </td>
            <td className="py-3 px-5 w-1/4 border-b text-center">
                <p className="block antialiased text-sm">
                    {business}
                </p>
            </td>
            <td className="py-3 px-5 w-1/4 border-b text-center">
                <p className="block antialiased text-sm">
                    {business}
                </p>
            </td>
            <td className="py-3 px-5 w-1/4 border-b text-center">
                <p className="block antialiased text-sm">
                    {business}
                </p>
            </td>
        </tr>
    )
}

export default Business