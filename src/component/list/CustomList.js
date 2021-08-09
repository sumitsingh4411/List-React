import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Heading from './Heading';
import './index.css';
import Modal from './../Modal/Modal';


const CustomList = ({ data, paginate }) => {
  const [show, setshow] = React.useState([false, null]);

  return (
    <>

      <div className="container">
        <Heading />
        {
          data && data.map((e, index) => (
            <>
              <Paper elevation={2} style={{ width: '90%', marginBottom: 10 }} onClick={() => {
                if (show[0] && show[1] === index) setshow([false, null]);
                else if (show[0] && show[1] !== index) setshow([true, index]);
                else setshow([true, index]);

              }}>
                <Typography className="column">
                  <Typography className="column">
                    {((paginate - 1) * 10) + (index + 1)}
                  </Typography>
                  <Typography className="column">
                    {e.name}
                  </Typography>
                  <ol className="column order extra">
                    {
                      e.occupation && e.occupation.map(p => (
                        <li>
                          {
                            p
                          }
                        </li>
                      ))
                    }
                  </ol>
                  <Typography className="column">
                    {e.birthday}
                  </Typography>
                  <Typography className="column">
                    {e.status}
                  </Typography>
                </Typography>
              </Paper>
              {
                show[0] && index === show[1] && (
                  <Modal e={e} />
                )
              }
            </>
          ))

        }

      </div>
    </>
  );
};

export default CustomList;
