export const bgColor = 'rgba(20, 26, 31, 0.3)';
export const getBgColor = (transparency) => `rgba(20,26,31,${transparency})`;

const antDesignThemeConfig = {
  token: {
    colorPrimary: '#6a64f5',
    fontSize: 16,
    borderRadius: 6,
    wireframe: false,
    colorBgBase: '#141a1f',
    colorBgLayout: bgColor,
    colorBgContainer: bgColor,
  },
  components: {
    Menu: {
      colorItemBgSelected: getBgColor('0.5'),
    },
  },
};

export default antDesignThemeConfig;
