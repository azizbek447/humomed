import { useBreadcrumbs } from '../hooks/useBreadcrumbs';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { find } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useCallback } from 'react';
import { RxSlash } from 'react-icons/rx';
import { appPaths } from '../constants/paths';
import { privateRoutes, publicRoutes } from '../routes';
import { IoHomeOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

const Breadcrumb = ({ shouldClear = false, currentPageTitle }) => {
  const { pathname, search } = useLocation();
  const { t } = useTranslation();
  const { breadcrumbs, addBreadcrumb, setBreadcrumb } = useBreadcrumbs();

  useEffect(() => {
    const matchingRoute = find([...privateRoutes, ...publicRoutes], route =>
      matchPath({ path: route.path, end: true }, pathname)
    );

    if (matchingRoute) {
      shouldClear
        ? setBreadcrumb(pathname, search)
        : addBreadcrumb(pathname, search);
    }
  }, [shouldClear, pathname, search]);

  const items = useMemo(() => {
    return breadcrumbs.reduce((acc, breadcrumb) => {
      const route = find([...privateRoutes, ...publicRoutes], r =>
        matchPath({ path: r.path, end: true }, breadcrumb.path)
      );
      if (route?.breadcrumb) {
        acc.push({
          ...route.breadcrumb,
          path: breadcrumb.path,
          query: breadcrumb.query,
        });
      }
      return acc;
    }, []);
  }, [breadcrumbs]);

  const formatTitle = useCallback(
    (item) =>
      item.icon ? (
        <span className="inline-flex items-center gap-1">
          {item.icon}
          {t(item.title)}
        </span>
      ) : (
        t(item.title)
      ),
    [t]
  );

  if (!items.length) return null;

  return (
    <nav className="flex font-roboto leading-6 pt-35" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link
            to={appPaths.HOME}
            className="flex items-center hover:text-primary hover:underline transition-colors"
          >
            <IoHomeOutline size={16} className="mr-1" />
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <RxSlash />
            {index === items.length - 1 ? (
              <span className="text-dark/80" aria-current="page">
                {currentPageTitle || t(item.title)}
              </span>
            ) : (
              <Link
                to={item.path}
                className="flex items-center hover:text-primary hover:underline transition-colors"
              >
                {t(item.title)}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  shouldClear: PropTypes.bool,
  currentPageTitle: PropTypes.string,
};

export default Breadcrumb;
