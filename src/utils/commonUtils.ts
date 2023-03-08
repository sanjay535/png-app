export const getDevice = (userAgent: string) => {
  let device = "desktop";

  if (userAgent && userAgent !== "") {
    let isMobile = userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );
    if (isMobile && isMobile?.length > 0) {
      device = "mobile";
    }
  }

  return device;
};
