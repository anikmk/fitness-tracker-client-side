
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import newslatter from "../../../assets/home/newslatter/newslatter.svg";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const NewsLatter = () => {
  const axiosSecure = useAxiosSecure();
  const newsLatterInfo = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newsLatterData = {name,email}
    axiosSecure.post('/newslatter',newsLatterData)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Subscribed",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    // console.log(newsLatterData)
  }
  return (
    <div className="bg-base-300 py-12 border-b-2 border-[#80f221]">
      <div className="w-[80%] mx-auto">
        <div className="md:flex items-center">
          <div className="w-[50%] lg:mr-12">
            <img src={newslatter} alt="" />
          </div>
          <div className="w-[50%] flex flex-col items-center">
            <SectionTitle
              heading="Newslatter"
              subHeading="subscrive to our newslatter and stay update"
            ></SectionTitle>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={newsLatterInfo} className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name.."
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email.."
                    className="input input-bordered"
                    required
                  />
                </div> 
                <input type="submit" value='Subscrive Now' className="btn btn-primary"></input>
                </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
