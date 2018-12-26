import React from 'react'


const MobileVerification = () => {
    return (
        <div>
            <p className="h4 text-center py-4 blue-text">Authenticate Yourself</p>
            <form>

                <label className="grey-text font-weight-light">Enter Mobile Number</label>
                <input
                    type="number"
                    className="form-control"
                    size="35"
                />

            </form>
        </div>

    )
}

export default MobileVerification;