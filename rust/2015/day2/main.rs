fn main() {
    let file_path = "./input.txt";
    let content = fs::read_to_string(file_path).expect("Should read the content inside the file");
}
