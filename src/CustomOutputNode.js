// import React, { memo } from 'react';
// import { Handle} from 'reactflow';
// function CustomInputNode({ data }) {
//     return (
//         <div style={{ background: 'white', color: 'black', border: '2px solid black',borderRadius:'5px' }}>
//             <div style={{  textAlign: 'center', paddingRight: '10px',fontFamily:'cursive'}}>
//                 {data.image && (
//                   <img src={data.image} alt="custom" style={{ width: '90px', height: '40px',paddingLeft:'15px'}} />
//                 )}
//                 {data.name}
//              </div>
//              <Handle type="target" position="left" />
//         </div>
//       );
//     }
// export default memo(CustomInputNode);
import React, { memo } from 'react';
import { Handle} from 'reactflow';
import "./CustomOutput.css";
function CustomInputNode({ data }) {
  console.log(data);
    return (
        <div id="a1">
            <div id="a2">
                {data.image && (
                  <img src={data.image} alt="custom" />
                )}
                {data.name}
             </div>
             <Handle type="target" position="left" />
        </div>
      );
    }

export default memo(CustomInputNode);



       