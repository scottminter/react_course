import React from 'react';

const withClass = (WrappedContent, className) => {
  return (
    <div className={className}>
      <WrappedContent />
    </div>
  );
};
// const withClass = props => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// );

export default withClass;