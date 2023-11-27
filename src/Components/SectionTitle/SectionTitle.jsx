

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center w-[90%] md:w-[60%] mx-auto mb-8'>
                <h3 className='text-4xl w-[100%] md:w-[60%] mx-auto pb-3 mb-3 font-bold border-b-2 border-[#80f221]'>{heading}</h3>
                <p> {subHeading} </p>
            </div>
    );
};

export default SectionTitle;