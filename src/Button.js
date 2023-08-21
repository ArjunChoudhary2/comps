import PropTypes from 'prop-types';

function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {

    // if(primary && secondary){
    //     throw new Error("Can't use primary and seconday prop at the same time" );
    // }

  return <button className='text-blue-800'>{children}</button>;
}

Button.propTypes = {
    multiplePropCheck: ({primary, secondary, success, warning, danger}) =>{
        const count =  Number(!!primary)+ Number(!!secondary) + Number(!!success)+ Number(!!warning)+Number(!!danger);
        if(count>1){
            return new Error('Only one major prop allowed out of primary, secondary, success, warning, danger');
        }
    },
};

export default Button;
