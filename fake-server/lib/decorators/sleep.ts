export function SleepDecorator(delay: number) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
