
export const SmSpinner = ({text}) => {
    return (
        <>
            <div className='sm_spinner_cont'>
                <div className='md_spinner'></div>
                <div className='spin_text'>{text}</div>
            </div>
        </>
    )
}