Đầu tiên, tôi sẽ install project bằng lệnh npx create-next-app@latest hr_test
Sau đó tôi sẽ cài đặt các thư viện như:
antd: npm install antd
react-icon: npm install react-icons
react-router-dom: npm install react-router-dom
Tiếp theo, tôi sẽ tạo một folder tên page để thực hiện dự án

**Cách chạy trang web
Sau khi clone về máy sẽ dùng lệnh npm run build để build lại web
Sau khi build thành công sẽ nhập npm start để chạy
Đầu tiên dùng tài khoản admin để đăng nhập: 
Tên tài khoản: admin
Mật khẩu: adminpassword
Sau khi chạy sẽ vào trang danh sách
Vì dữ liệu chỉ lưu trữ trên localStorage nên sẽ không có dữ liệu cũ
nhập các thông tin của nhân viên và nhập tài khoản mật khẩu cho nhân viên

Sau khi đã có tài khoản nhân viên, bạn cần start lại web và đăng nhập vào tài khoản của nhân viên để xem thông tin vào yêu cầu xin nghỉ

Sau khi điền yêu cầu xin nghỉ thì yêu cầu này sẽ được hiển thị bên trang yêu cầu xin nghỉ của admin, admin sẽ duyệt và dễ hiển thị yêu cầu trên trang của nhân viên.

*Ưu điểm là trang web có logic rõ ràng trong quản lí nhân sự khi không dùng đăng ký tài khoản, vì tài khoản nhân viên do admin cấp chứ không thể đăng ký
*Nhược điểm là không thể thêm Header vào các trang, không tách biệt FE và BE ra rõ ràng, chỉ lưu data được trên localStorage
