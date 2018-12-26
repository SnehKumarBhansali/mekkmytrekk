import React from 'react'


const OTPVerification = () => {
    return (
        <div>
            <p className="h4 text-center py-4 blue-text">Authenticate Yourself</p>
            <p className="text-center">We have sent an OTP to your {} number. Please verify it here.</p>
            <form>
                <label className="grey-text font-weight-light">Enter OTP</label>
                <input
                    type="number"
                    maxLength="4"
                    size="4"
                />

            </form>
        </div>
    )
}

export default OTPVerification;