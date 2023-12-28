export function SleepDecorator(delay: number) {
  return function (_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: unknown[]) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
