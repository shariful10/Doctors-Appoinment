const Doctor = () => {
    return (
        <section className="bg-[#FFF9EA]">
            <div className="container text-center">
                <h2 className="heading">Find a Doctor</h2>
                <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066FF2C] rounded-md flex items-center justify-between">
                    <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" placeholder="Search" />
                </div>
            </div>
        </section>
    );
};

export default Doctor;