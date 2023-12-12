export const Quote = (props, increment, decrement) => {
  const { name, image, status, gender } = !!props.data && props.data;

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='text-center'>
          <h3 className='mb-5'>{name}</h3>
          <img className='img-fluid' src={image} alt={name} />
          <p>{status === 'Alive' ? 'Esta Vivo' : 'Esta Muerto'}</p>
          <p className='mb-2'>{gender === 'Male' ? 'Hombre' : 'Mujer'}</p>
        </div>
      </div>
    </>
  );
};
