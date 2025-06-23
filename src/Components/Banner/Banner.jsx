import logo from "../../assets/hreoImg.jpg"

const Banner = () => {
    return (
         <div className="hero bg-base-200 min-h-screen ">
            <div className="max-w-6xl mx-auto gap-20 hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2">
                    <img
                        src={logo}
                        className="max-w-full rounded-lg shadow-2xl"
                    />
                </div>

                <div className="w-1/2">
                    <h1 className=" text-5xl font-bold"> Strategic Growth Roadmap</h1>
                    <p className="py-6 ">
                        Discover our 5-year plan for innovation and progress, highlighting key milestones and upcoming goals to guide your journey forward.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;