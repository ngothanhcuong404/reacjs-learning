// 1. Hàm bình thường có kiểu rõ ràng
export function greet(name: string): string {
  return `Hello, ${name}`;
}

// 2. Hàm không trả về gì (void)
export function logInfo(message: string): void {
  console.log("ℹ️ Log:", message);
}

// 3. Arrow function với kiểu
export const add = (a: number, b: number): number => {
  return a + b;
};

// 4. Hàm có tham số tùy chọn
export function multiply(a: number, b?: number): number {
  return b ? a * b : a;
}

// 5. Hàm có giá trị mặc định
export function divide(a: number, b: number = 1): number {
  return a / b;
}

// 6. Hàm dùng union
export function printId(id: string | number): void {
  console.log("🆔 ID:", id);
}

// 7. Hàm never
export function crash(): never {
  throw new Error("💥 This function always crashes!");
}

// 8. Hàm nhận callback
export function processUser(name: string, callback: (msg: string) => void): void {
  const greeting = greet(name);
  callback(greeting);
}
