import classNames from 'classnames';

type Props = {
  name: string;
  variant: 'fas' | 'fab';
};

/**
 * Renders an icon
 * https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
 *
 * @example
 * <Icon name="camera" />
 */
export default function Icon(props) {
  const { name, variant = 'fas', style = {} } = props;
  return <i className={classNames([variant, `fa-${name}`])} style={style} aria-hidden />;
}
