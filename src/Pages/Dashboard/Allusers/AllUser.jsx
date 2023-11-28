import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUser = ({ user }) => {
    console.log(user)
    const axiosSecure = useAxiosSecure();
    const {name,email,role,_id} = user;

     axiosSecure.patch(`users/admin/${_id}`)
    
    return (
      <div className="overflow-x-auto">
        <table className="table">
         
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{role}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default AllUser;
  