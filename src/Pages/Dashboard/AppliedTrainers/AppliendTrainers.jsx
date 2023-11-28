import useAppliedTrainers from "../../../hooks/useAppliedTrainers";


const AppliendTrainers = () => {
    const [appliedTrainers] = useAppliedTrainers([])
    console.log(appliedTrainers)
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        

    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default AppliendTrainers;