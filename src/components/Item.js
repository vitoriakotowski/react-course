import PropTypes from 'prop-types'

function Item({brand, launch}) {
    return (
        <>
            <li>{brand} - {launch}</li>
        </>
    )
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    launch: PropTypes.number.isRequired,
}

Item.defaultProps = {
    brand: 'The brand is missing',
    launch:"The launch's year is missing",
}

export default Item